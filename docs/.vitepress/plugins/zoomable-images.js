// Plugin to add data-zoomable attribute to all images
export function zoomableImagesPlugin(md) {
  const defaultRender = md.renderer.rules.image

  md.renderer.rules.image = function(tokens, idx, options, env, self) {
    tokens[idx].attrSet('data-zoomable', '')
    return defaultRender(tokens, idx, options, env, self)
  }
}
