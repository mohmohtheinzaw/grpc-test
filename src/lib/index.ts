type responseInterface = {
    statusCode: number;
    messageEn: string;
    messageMm: string;
    body: any;
  };
  
  export const Responser = ({
    statusCode,
    messageMm,
    messageEn,
    body,
  }: responseInterface) => {
    return {
      meta: {
        success: statusCode >= 200 && statusCode <= 300 ? true : false,
        messageEn: messageEn,
        messageMm: messageMm,
      },
      body: body,
    };
  };