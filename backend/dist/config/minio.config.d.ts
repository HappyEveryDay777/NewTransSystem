declare const _default: (() => {
    endpoint: string;
    port: number;
    accessKey: string;
    secretKey: string;
    bucket: string;
    useSSL: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    endpoint: string;
    port: number;
    accessKey: string;
    secretKey: string;
    bucket: string;
    useSSL: boolean;
}>;
export default _default;
