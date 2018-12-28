const isGitHub = process.env.NODE_ENV === 'github-pages'

module.exports = {
  'process.env.BACKEND_URL': isGitHub ? '/next-website' : ''
}
