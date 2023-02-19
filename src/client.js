import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'xsuifz1s',
    dataset: 'production',
    apiVersion: '2022-10-21',
    useCdn: 'true',
    token: 'skyKi2MTK9Jj0WaExescmCzqEYv4RR1oM6tgeJHLGWmaWTl7bGJYfnoYTj2MsXAvRde4yop0uXJCDbPnEBPaRTawEgsJUCHjuqZvzQdyBxihfU8kj9X7J2qu75C43v5PxIAFCQEPU1HHOI0dXgfsYGLaPWNB5VgSRaiDZntFSnbDOOVLl8SR',
})
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);