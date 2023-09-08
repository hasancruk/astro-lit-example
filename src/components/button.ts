import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cr-button')
export class Button extends LitElement {
  static styles = css`
    :host {
      --primary: #ff0087;
      --secondary: #fff;
    }

    button {
      background-color: var(--selected-variant-bg, var(--primary));
      padding-block: 0.75rem;
      padding-inline: 1.5rem;
      border-width: 1px;
      border-style: solid;
      border-color: var(--selected-variant-border, var(--primary));
      cursor: inherit;
    }

    .primary {
      --selected-variant-bg: var(--primary);
      --selected-variant-border: var(--primary);
      --selected-variant-text: var(--secondary);
    }

    .secondary {
      --selected-variant-bg: var(--secondary);
      --selected-variant-border: var(--primary);
      --selected-variant-text: var(--primary);
    }

    
    .button-label {
      color: var(--selected-variant-text, var(--secondary));
    }
  `;

  @property({ reflect: true })
  variant: "primary" | "secondary" = "primary";

  render() {
    return html`
      <button class="${this.variant}">
        <slot class="button-label"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cr-button': Button;
  }
}
