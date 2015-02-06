'use strict';

var dictionary, build;

dictionary = require('dictionary.js');

build = function() {
    var attributes = dictionary.build({
      dictionaryName: 'attributes'
    });

    attributes.$add({
      accesskey: 'accesskey',
      class: 'class',
      contenteditable: 'contenteditable',
      contextmenu: 'contextmenu',
      draggable: 'draggable',
      dropzone: 'dropzone',
      hidden: 'hidden',
      id: 'id',
      inert: 'inert',
      itemid: 'itemid',
      itemprop: 'itemprop',
      itemref: 'itemref',
      itemscope: 'itemscope',
      itemtype: 'itemtype',
      lang: 'lang',
      xmlLang: 'xml:lang',
      spellcheck: 'spellcheck',
      style: 'style',
      tabindex: 'tabindex',
      title: 'title',
      translate: 'translate',
      role: 'role',
      onabort: 'onabort',
      ondragleave: 'ondragleave',
      onload: 'onload',
      onratechange: 'onratechange',
      onblur: 'onblur',
      ondragover: 'ondragover',
      onloadeddata: 'onloadeddata',
      onreset: 'onreset',
      oncancel: 'oncancel',
      ondragstart: 'ondragstart',
      onloadedmetadata: 'onloadedmetadata',
      onscroll: 'onscroll',
      oncanplay: 'oncanplay',
      ondrop: 'ondrop',
      onloadstart: 'onloadstart',
      onseeked: 'onseeked',
      oncanplaythrough: 'oncanplaythrough',
      ondurationchange: 'ondurationchange',
      onmousedown: 'onmousedown',
      onseeking:'onseeking',
      onchange: 'onchange',
      onemptied: 'onemptied',
      onmousemove: 'onmousemove',
      onselect: 'onselect',
      onclick: 'onclick',
      onended: 'onended',
      onmouseout: 'onmouseout',
      onshow: 'onshow',
      onclose: 'onclose',
      onerror: 'onerror',
      onmouseover: 'onmouseover',
      onsort: 'onsort',
      oncontextmenu: 'oncontextmenu',
      onfocus: 'onfocus',
      onmouseup: 'onmouseup',
      onstalled: 'onstalled',
      oncuechange: 'oncuechange',
      oninput: 'oninput',
      onmousewheel: 'onmousewheel',
      onsubmit: 'onsubmit',
      ondblclick: 'ondblclick',
      oninvalid: 'oninvalid',
      onpause: 'onpause',
      onsuspend: 'onsuspend',
      ondrag: 'ondrag',
      onkeydown: 'onkeydown',
      onplay: 'onplay',
      ontimeupdate: 'ontimeupdate',
      ondragend: 'ondragend',
      onkeypress: 'onkeypress',
      onplaying: 'onplaying',
      onvolumechange: 'onvolumechange',
      ondragenter: 'ondragenter',
      onkeyup: 'onkeyup',
      onprogress: 'onprogress',
      onwaiting: 'onwaiting',
      download: 'download',
      href: 'href',
      hreflang: 'hreflang',
      media: 'media',
      ping: 'ping',
      rel: 'rel',
      target: 'target',
      type: 'type',
      alt: 'alt',
      coords: 'coords',
      shape: 'shape',
      autoplay: 'autoplay',
      controls: 'controls',
      crossorigin: 'crossorigin',
      loop: 'loop',
      mediagroup: 'mediagroup',
      muted: 'muted',
      preload: 'preload',
      src: 'src',
      dir: 'dir',
      cite: 'cite',
      onafterprint: 'onafterprint',
      onbeforeprint: 'onbeforeprint',
      onbeforeunload: 'onbeforeunload',
      onhashchange: 'onhashchange',
      onmessage: 'onmessage',
      onoffline: 'onoffline',
      onpagehide: 'onpagehide',
      onpageshow: 'onpageshow',
      onpopstate: 'onpopstate',
      onresize: 'onresize',
      onunload: 'onunload',
      autofocus: 'autofocus',
      disabled: 'disabled',
      form: 'form',
      formaction: 'formaction',
      formenctype: 'formenctype',
      formmethod: 'formethod',
      formonvalidate: 'formonvalidate',
      formtarget: 'formtarget',
      menu: 'menu',
      name: 'name',
      value: 'value',
      height: 'height',
      width: 'width',
      span: 'span',
      checked: 'checked',
      command: 'command',
      icon: 'icon',
      label: 'label',
      radiogroup: 'radiogroup',
      datetime: 'datetime',
      open: 'open',
      acceptcharset: 'accept-charset',
      action: 'action',
      autocomplete: 'autocomplete',
      enctype: 'enctype',
      method: 'method',
      novalidate: 'novalidate',
      manifest: 'manifest',
      xmlns: 'xmlns',
      allowfullscreen: 'allowfullscreen',
      sandbox: 'sandbox',
      seamless: 'seamless',
      srcdoc: 'srcdoc',
      ismap: 'ismap',
      srcset: 'srcset',
      usemap: 'usemap',
      accept: 'accept',
      dirname: 'dirname',
      inputmode: 'inputmode',
      list: 'list',
      max: 'max',
      maxlength: 'maxlength',
      min: 'min',
      multiple: 'multiple',
      pattern: 'pattern',
      placeholder: 'placeholder',
      readonly: 'readonly',
      required: 'required',
      size: 'size',
      step: 'step',
      challenge: 'challenge',
      keytype: 'keytype',
      for: 'for',
      sizes: 'sizes',
      default: 'default',
      charset: 'charset',
      content: 'content',
      httpequiv: 'http-equiv',
      high: 'high',
      low: 'low',
      optimum: 'optimum',
      data: 'data',
      typemustmatch: 'typemustmatch',
      reversed: 'reversed',
      start: 'start',
      selected: 'selected',
      xmlspace: 'xml:space',
      async: 'async',
      defer: 'defer',
      scoped: 'scoped',
      border: 'border',
      sortable: 'sortable',
      colspan: 'colspan',
      headers: 'headers',
      rowspan: 'rowspan',
      cols: 'cols',
      rows: 'rows',
      wrap: 'wrap',
      scope: 'scope',
      sorted: 'sorted',
      pubdate: 'pubdate',
      kind: 'kind',
      srclang: 'srclang',
      poster: 'poster'
  });

  return attributes;
};

module.exports = {
  build: build
};
