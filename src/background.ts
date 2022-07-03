// interface LidData {
//   lidName: string,
//   lidUrl: string,
//   lidPosition: string,
// }

// chrome.runtime.onMessage.addListener((message: LidData) => {
//   const formattedMessage = `${message.lidName} ${message.lidUrl} ${message.lidPosition}`
//   console.log(navigator.permissions);

//   navigator.clipboard.writeText(formattedMessage)
//   // document.execCommand
// })