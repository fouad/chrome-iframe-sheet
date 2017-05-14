const notifier = require('node-notifier')

export async function src (fly, opts) {
  await fly.source(opts.src || 'src/**/*.js').babel().target('dist')
  notify('Compiled lib files')
}

// notification helper
function notify (msg) {
  return notifier.notify({
    title: 'chrome-iframe-sheet',
    message: msg,
    icon: false
  })
}

export async function build (fly) {
  fly.start('src')
}

export default async function (fly) {
  fly.start('src')
  await fly.watch('src/**/*.js', ['src'])
}
