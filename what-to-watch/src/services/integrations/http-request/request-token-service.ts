import EncryptionService from '@services/integrations/encryption';

const RequestTokenService = (request: {
  sender: string;
  receiver: string;
  body: Object;
  uuid?: string;
}) => {
  let encryptionService = EncryptionService();

  const buildRequestHeader = (args: {
    sender: string;
    receiver: string;
    timestamp: string;
    uuid?: string;
  }): { header: Object; base64: string } => {
    let header = {
      sender: args.sender,
      receiver: args.receiver,
      timestamp: args.timestamp,
      uuid: args.uuid ? args.uuid : '0000-0000-0000-0000',
    };
    let headerBase64 = encryptionService.encodeStringToBase64(
      JSON.stringify(header)
    );
    return {
      header: header,
      base64: headerBase64,
    };
  };

  const getFirstFourCharsFromStringWithPadding = (string: string): string => {
    let newString = '';
    for (let i = 0; i < 4; i++) {
      let indexChar = string[i];
      newString = newString + (indexChar ? indexChar : '0');
    }
    return newString;
  };

  const buildRequestSecret = (args: {
    sender: string;
    receiver: string;
    timestamp: string;
  }): string => {
    let senderFirstFourChars = getFirstFourCharsFromStringWithPadding(
      args.sender
    );
    let receiverFirstFourChars = getFirstFourCharsFromStringWithPadding(
      args.receiver
    );
    let key = senderFirstFourChars + receiverFirstFourChars;
    return encryptionService.hashStringWithHmacSHA256(args.timestamp, key);
  };

  const buildRequestAuth = (): string => {
    let authLocalStorage =
      typeof localStorage !== 'undefined' ? localStorage.getItem('auth') : null;
    let authBase64 = encryptionService.encodeStringToBase64(JSON.stringify({}));
    return authLocalStorage ? authLocalStorage : authBase64;
  };

  const buildRequestPayload = (
    payload: Object
  ): { payload: Object; base64: string } => {
    let payloadBase64 = encryptionService.encodeStringToBase64(
      JSON.stringify(payload)
    );
    return {
      payload: payload,
      base64: payloadBase64,
    };
  };

  const buildRequestSignature = (args: {
    headerBase64: string;
    payloadBase64: string;
    authBase64: string;
    secret: string;
  }): string => {
    let signatureString = `${args.headerBase64}.${args.payloadBase64}.${args.authBase64}.${args.secret}`;
    return encryptionService.hashStringWithSHA256(signatureString);
  };

  const buildRequestToken = (request: {
    sender: string;
    receiver: string;
    body: Object;
    uuid?: string;
  }): string => {
    let timestamp = Date.now().toString();
    let requestHeader = buildRequestHeader({
      sender: request.sender,
      receiver: request.receiver,
      timestamp: timestamp,
      uuid: request.uuid,
    });
    let requestSecret = buildRequestSecret({
      sender: request.sender,
      receiver: request.receiver,
      timestamp: timestamp,
    });
    let requestPayload = buildRequestPayload(request.body);
    let requestAuth = buildRequestAuth();
    let requestSignature = buildRequestSignature({
      headerBase64: requestHeader.base64,
      authBase64: requestAuth,
      payloadBase64: requestPayload.base64,
      secret: requestSecret,
    });
    return `${requestHeader.base64}.${requestPayload.base64}.${requestAuth}.${requestSignature}`;
  };

  return buildRequestToken(request);
};

export default RequestTokenService;
