import defaultSettings from '@/settings'

const title = defaultSettings.title || "小羊Read";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
