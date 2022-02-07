import { LitElement } from 'lit';

export class BaseElement extends LitElement {
  slotMap = new Map();

  assignSlotToContent(child) {
    return child.getAttribute
      ? child.getAttribute('slot') || 'default'
      : 'default';
  }

  addChildToSlotMap(slot, child) {
    if (!slot) return;

    if (!this.slotMap.has(slot)) {
      this.slotMap.set(slot, [child]);
    } else {
      this.slotMap.set(slot, [...this.slotMap.get(slot), child]);
    }
  }

  // Save a reference to the pseudoSlot content before lit-element renders
  saveSlots() {
    Array.from(this.childNodes).forEach((child) => {
      const slot = this.assignSlotToContent(child);

      if (!child.textContent || child.textContent.trim().length > 0) {
        this.addChildToSlotMap(slot, child);
      } else if (slot && child instanceof HTMLElement) {
        this.addChildToSlotMap(slot, child);
      }
    });
  }

  update(changedProperties) {
    if (!this.hasUpdated) {
      this.saveSlots();
    }

    super.update(changedProperties);
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // Callback function to execute when mutations are observed
    const callback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
          console.log('A child node has been added or removed.');
          this.slotMap.clear();
          this.saveSlots();
          this.requestUpdate();
        }
      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(this, {
      attributes: false,
      childList: true,
      subtree: false,
    });
  }

  slotted(slot = 'default') {
    const slotContent = this.slotMap.get(slot);

    // render actual slots if Shadow DOM supported + slotted content exists
    if (this.shadowRoot && slotContent) {
      const realSlot = document.createElement('slot');
      if (slot !== 'default') {
        realSlot.setAttribute('name', slot);
      }
      return realSlot;
    }

    // if (slotContent && slotContent.content) {
    //   return slotContent.content;
    // }
    // if (slotContent && slotContent.childNodes) {
    //   return Array.from(slotContent.childNodes);
    // }
    // if (slotContent) {
    //   return slotContent;
    // }
    // if (defaultContent) {
    //   return defaultContent;
    // }

    return null;
  }
}
