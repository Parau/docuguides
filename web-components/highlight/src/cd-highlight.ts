import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

/**
 * A highlight component with animated reveal effect.
 * 
 * @slot - Content to be highlighted
 * @fires highlight-animation-complete - Dispatched when animation completes
 */
@customElement('cd-highlight')
export class CdHighlight extends LitElement {
  /**
   * Highlight background color (default: yellow)
   */
  @property({ type: String })
  color = 'yellow'

  /**
   * Animation delay in milliseconds (default: 0)
   */
  @property({ type: Number })
  delay = 0

  @state()
  private _isVisible = false

  @state()
  private _isAnimating = false

  @state()
  private _canAnimate = false

  @state()
  private _hasAnimated = false

  private _intersectionObserver?: IntersectionObserver
  private _animationTimeout?: number
  private _textContent = ''
  private _animationDuration = 500 // Base duration in ms

  static _highlightQueue: CdHighlight[] = []
  static _allElementsRegistered = false
  static _visibilityStabilized = false
  static _visibilityCheckTimeout?: number

  connectedCallback() {
    super.connectedCallback()
    this._setupIntersectionObserver()
    this._addToQueue()
    this._setupEventListeners()
    
    // Aguardar um tick para todos os elementos se registrarem
    setTimeout(() => {
      this._checkIfAllElementsRegistered()
    }, 0)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._intersectionObserver?.disconnect()
    this._removeFromQueue()
    if (this._animationTimeout) {
      clearTimeout(this._animationTimeout)
    }
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties)
    if (changedProperties.has('color')) {
      this.style.setProperty('--highlight-color', this.color)
    }
  }

  private _setupIntersectionObserver() {
    this._intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this._isVisible) {
            this._isVisible = true
            this._scheduleVisibilityStabilizationCheck()
            this._tryStartAnimation()
          }
        })
      },
      { threshold: 0.1 }
    )
    this._intersectionObserver.observe(this)
  }

  private _scheduleVisibilityStabilizationCheck() {
    // Cancelar timeout anterior se existir
    if (CdHighlight._visibilityCheckTimeout) {
      clearTimeout(CdHighlight._visibilityCheckTimeout)
    }
    
    // Aguardar 100ms sem mudanças de visibilidade para considerar estável
    CdHighlight._visibilityCheckTimeout = window.setTimeout(() => {
      if (!CdHighlight._visibilityStabilized) {
        CdHighlight._visibilityStabilized = true
        // console.log("Visibilidade estabilizada. Iniciando verificação de animações...")
        
        // Tentar iniciar animações de todos os elementos visíveis
        CdHighlight._highlightQueue.forEach(element => {
          if (element._isVisible && !element._hasAnimated) {
            element._tryStartAnimation()
          }
        })
      }
    }, 100)
  }

  private _checkIfAllElementsRegistered() {
    // Verificar se todos os elementos cd-highlight do DOM estão na fila
    const allDOMElements = document.querySelectorAll('cd-highlight')
    if (CdHighlight._highlightQueue.length >= allDOMElements.length && !CdHighlight._allElementsRegistered) {
      CdHighlight._allElementsRegistered = true
      // Ordenar a fila pela ordem DOM real
      this._sortQueueByDOMOrder()
      // console.log("Todos os elementos registrados. Ordem final:", CdHighlight._highlightQueue.map((el, i) => `${i}: ${el.textContent?.trim()}`))
    }
  }

  private _sortQueueByDOMOrder() {
    const allElements = Array.from(document.querySelectorAll('cd-highlight')) as CdHighlight[]
    CdHighlight._highlightQueue.sort((a, b) => {
      const indexA = allElements.indexOf(a)
      const indexB = allElements.indexOf(b)
      return indexA - indexB
    })
  }

  private _setupEventListeners() {
    document.addEventListener('highlight-animation-complete', this._onOtherAnimationComplete.bind(this))
  }

  private _addToQueue() {
    CdHighlight._highlightQueue.push(this)
    // console.log("Item adicionado a fila:", this.textContent?.trim())
  }

  private _removeFromQueue() {
    const index = CdHighlight._highlightQueue.indexOf(this)
    if (index > -1) {
      CdHighlight._highlightQueue.splice(index, 1)
    }
  }

  private _tryStartAnimation() {
    // Se já animou, não tenta mais
    if (this._hasAnimated || !this._isVisible || this._isAnimating) return
    
    // Aguardar todos os elementos se registrarem antes de iniciar qualquer animação
    if (!CdHighlight._allElementsRegistered) return
    
    // Aguardar a visibilidade se estabilizar (exceto no primeiro elemento)
    const myIndex = CdHighlight._highlightQueue.indexOf(this)
    if (!CdHighlight._visibilityStabilized && myIndex > 0) return

    // console.log(`Elemento ${myIndex} tentando iniciar animação. Seu conteúdo:`, this.textContent?.trim())
    
    // Check if this is the first element or if all previous elements have completed
    let canStart = myIndex === 0
    
    if (!canStart) {
      // Check if all previous elements in queue have already animated or are not visible
      canStart = true
      for (let i = 0; i < myIndex; i++) {
        const prevElement = CdHighlight._highlightQueue[i]
        // console.log(`Verificando elemento ${i}: visible=${prevElement._isVisible}, animated=${prevElement._hasAnimated}`)
        // If a previous element is visible but hasn't animated, we need to wait
        if (prevElement._isVisible && !prevElement._hasAnimated) {
          // console.log(`Elemento ${myIndex} precisa aguardar elemento ${i}`)
          canStart = false
          break
        }
      }
    }
    
    if (canStart) {
      // console.log(`Elemento ${myIndex} pode iniciar animação`)
      this._canAnimate = true
      this._startAnimation()
    } else {
      // console.log(`Elemento ${myIndex} não pode iniciar ainda`)
    }
  }

  private _onOtherAnimationComplete(event: Event) {
    const completedElement = event.target as CdHighlight
    if (completedElement === this || this._hasAnimated) return

    // When any element completes, check if this element can now start
    this._tryStartAnimation()
  }

  private _startAnimation() {
    if (!this._canAnimate || this._isAnimating) return

    //const myIndex = CdHighlight._highlightQueue.indexOf(this)
    // console.log(`Iniciando animação do elemento ${myIndex} com delay ${this.delay}ms`)
    
    this._isAnimating = true

    // Calculate duration based on text length
    this._textContent = this.textContent?.trim() || ''
    const baseTime = 1000
    const additionalTime = Math.max(0, (this._textContent.length - 20) * 10)
    this._animationDuration = Math.min(baseTime + additionalTime, 6000)
    this.style.setProperty('--animation-duration', `${this._animationDuration}ms`)

    // Start delay countdown only after becoming visible
    this._animationTimeout = window.setTimeout(() => {
      // console.log(`Aplicando classe 'animate' ao elemento ${myIndex}`)
      this.classList.add('animate')
      
      // Complete animation after duration
      this._animationTimeout = window.setTimeout(() => {
        this._completeAnimation()
      }, this._animationDuration)
    }, this.delay)
  }

  private _completeAnimation() {
    //const myIndex = CdHighlight._highlightQueue.indexOf(this)
    // console.log(`Elemento ${myIndex} completou animação`)
    
    this._isAnimating = false
    this._hasAnimated = true // Marca que já animou
    
    // Dispatch completion event
    const event = new CustomEvent('highlight-animation-complete', {
      bubbles: true,
      detail: { element: this }
    })
    this.dispatchEvent(event)
  }

  render() {
    return html`
      <span class="highlight-container">
        <slot></slot>
      </span>
    `
  }

  static styles = css`
    :host {
      --highlight-color: yellow;
      position: relative;
      display: inline;
      background: linear-gradient(
        90deg,
        var(--highlight-color) 0%,
        var(--highlight-color) 100%
      );
      background-size: 0% 100%;
      background-repeat: no-repeat;
      background-position: left center;
      transition: background-size var(--animation-duration, 2s) ease-out;
    }

    :host(.animate) {
      background-size: 100% 100%;
    }

    .highlight-container {
      position: relative;
      display: inline;
    }

    /* Support for multiline highlighting */
    ::slotted(*) {
      background: inherit;
      background-clip: text;
      -webkit-background-clip: text;
    }

    /* Ensure the component works inline within text */
    :host {
      display: inline;
      line-height: inherit;
    }

    /* Animation timing function for smooth reveal */
    :host(.animate) {
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'cd-highlight': CdHighlight
  }
}
