/* eslint-disable */ 

export default function isValidUrl (url) {
 const pattern = /(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%.\+#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%\+.#?&//=])|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%.\+#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%\+.#?&//=])/g

  return pattern.test(url);
}