export const cmInput: {
  inputFormats: Record<string, RegExp>
  validFormats: Record<string, RegExp>
} = {
  inputFormats: {
    english: /[A-Za-z]+/g,
    korean: /[ㄱ-ㅎ가-힣ㅏ-ㅣ]+/g,
    koEng: /[ㄱ-ㅎ가-힣ㅏ-ㅣA-Za-z]+/g,
    koEngNu: /[ㄱ-ㅎ가-힣ㅏ-ㅣA-Za-z0-9]+/g,
    number: /\d+/g,
    numberEnglish: /[A-Za-z0-9]+/g,
    numberKorean: /[ㄱ-ㅎ가-힣ㅏ-ㅣ0-9]+/g,
    email: /[^\s@]+@[^\s@]+\.[^\s@]+/g,
    id: /[A-Za-z0-9 !@#$%^&*]+/g,
    password: /[A-Za-z\d@$!%*?&]+/g,
    phone: /(\+?\d{1,3}[-.\s]?)?(010|011|016|017|018|019)[-.\s]?\d{3,4}[-.\s]?\d{4}/g,
    url: /(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w .-]*)*\/?/g,
    ipv4: /(\d{1,3}\.){3}\d{1,3}/g,
    hexColor: /#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g,
    uuid: /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/gi,
    date: /\d{4}-\d{2}-\d{2}/g,
    time: /([01]\d|2[0-3]):[0-5]\d:[0-5]\d/g,
    postalCode: /\d{5}/g,
    all: /.+/g,
  },
  validFormats: {},
}
