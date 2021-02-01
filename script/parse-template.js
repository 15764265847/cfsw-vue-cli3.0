function parseTemplate (
    template,
    contentPlaceholder
  ) {
    if ( contentPlaceholder === void 0 ) contentPlaceholder = '<!--vue-ssr-outlet-->';
  
    if (typeof template === 'object') {
      return template
    }
  
    var i = template.indexOf('</head>');
    var j = template.indexOf(contentPlaceholder);
  
    if (j < 0) {
      throw new Error("Content placeholder not found in template.")
    }
  
    if (i < 0) {
      i = template.indexOf('<body>');
      if (i < 0) {
        i = j;
      }
    }
  
    return {
      head: compile$1(template.slice(0, i), compileOptions),
      neck: compile$1(template.slice(i, j), compileOptions),
      tail: compile$1(template.slice(j + contentPlaceholder.length), compileOptions)
    }
}

function render(template) {
   const parsedTemplate = parseTemplate(template);
   return (
    parsedTemplate.head(context) +
    (context.head || '') +
    this.renderResourceHints(context) +
    this.renderStyles(context) +
    parsedTemplate.neck(context) +
    content +
    this.renderState(context) +
    this.renderScripts(context) +
    parsedTemplate.tail(context)
  )
}

render.prototype.renderResourceHints = function renderResourceHints (context) {
    return this.renderPreloadLinks(context) + this.renderPrefetchLinks(context)
};

render.prototype.renderPreloadLinks = function renderPreloadLinks (context) {
    var this$1 = this;

  var files = this.getPreloadFiles(context);
  var shouldPreload = this.options.shouldPreload;
  if (files.length) {
    return files.map(function (ref) {
        var file = ref.file;
        var extension = ref.extension;
        var fileWithoutQuery = ref.fileWithoutQuery;
        var asType = ref.asType;

      var extra = '';
      // by default, we only preload scripts or css
      if (!shouldPreload && asType !== 'script' && asType !== 'style') {
        return ''
      }
      // user wants to explicitly control what to preload
      if (shouldPreload && !shouldPreload(fileWithoutQuery, asType)) {
        return ''
      }
      if (asType === 'font') {
        extra = " type=\"font/" + extension + "\" crossorigin";
      }
      return ("<link rel=\"preload\" href=\"" + (this$1.publicPath) + file + "\"" + (asType !== '' ? (" as=\"" + asType + "\"") : '') + extra + ">")
    }).join('')
  } else {
    return ''
  }
};
render.prototype.renderPrefetchLinks = function renderPrefetchLinks (context) {
    var this$1 = this;

  var shouldPrefetch = this.options.shouldPrefetch;
  if (this.prefetchFiles) {
    var usedAsyncFiles = this.getUsedAsyncFiles(context);
    var alreadyRendered = function (file) {
      return usedAsyncFiles && usedAsyncFiles.some(function (f) { return f.file === file; })
    };
    return this.prefetchFiles.map(function (ref) {
        var file = ref.file;
        var fileWithoutQuery = ref.fileWithoutQuery;
        var asType = ref.asType;

      if (shouldPrefetch && !shouldPrefetch(fileWithoutQuery, asType)) {
        return ''
      }
      if (alreadyRendered(file)) {
        return ''
      }
      return ("<link rel=\"prefetch\" href=\"" + (this$1.publicPath) + file + "\">")
    }).join('')
  } else {
    return ''
  }
};
  