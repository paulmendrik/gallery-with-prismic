import Prismic from "prismic-javascript";
export const apiEndpoint = 'https://lightfoot.cdn.prismic.io/api/v2'
export const accessToken = process.env.PRISMIC_TOKEN;
export const client = Prismic.client(apiEndpoint, { accessToken });

export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

export const linkResolver = (doc) => {

  if (doc.type === 'press') {
    return `/press/${doc.uid}`
  }
return '/'

}

export const hrefResolver = (doc) => {

  if (doc.type === 'press') {
    return `/press/${doc.uid}`
  }

  return '/'
}