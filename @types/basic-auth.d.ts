declare module "basic-auth" {
  interface BasicAuthResult {
    name: string;
    pass: string;
  }

  function basicAuth(req: any): BasicAuthResult | undefined;

  export = basicAuth;
}
