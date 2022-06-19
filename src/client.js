import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '8gs9cy6d',
  dataset: 'production',
  apiVersion: '2022-02-01',
  mode: 'no-cors',
  useCdn: true,
  token: 'skPDoLSMSw05PCIzuio7SNxr2SaQ3ogRj0vvQx6YhtqUyZaZbJInbvQAJouFqYAmiNb451iRehd90VpTgMhR6iLdEmIHaIbl2lVbq5qPyRN7NkxceNdCOecrleHXYJrfTggQSoay7nVOEc3pSWUPrvrSCoA9sx4NbtrsAAyvvcD8wJjaDLW4',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
