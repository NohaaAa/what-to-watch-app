import {SHA256, HmacSHA256, enc as ENC} from 'crypto-js';

const EncryptionService = () => {
    const hashStringWithSHA256 = (string: string): string =>
        SHA256(string).toString();

    const hashStringWithHmacSHA256 = (string: string, key: string): string =>
        HmacSHA256(string, key).toString();

    const encodeStringToBase64 = (string: string): string =>
        ENC.Base64.stringify(ENC.Utf8.parse(string));

    const decodeBase64ToString = (base64String: string): string =>
        ENC.Utf8.stringify(ENC.Base64.parse(base64String));

    return {
        hashStringWithSHA256,
        hashStringWithHmacSHA256,
        encodeStringToBase64,
        decodeBase64ToString,
    };
};

export default EncryptionService;
