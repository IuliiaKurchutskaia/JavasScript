function clear(elem) {
    for (let i=0; i < elem.childNodes.length; i++) {
        elem.childNodes[i].remove();
    }
  }