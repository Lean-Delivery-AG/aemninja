export default class MESSAGES {
  
  static CONNECTION_REFUSED(host:string){
    return `Connection Refused. Is your AEM instance running on '${host}'?`
  }
}