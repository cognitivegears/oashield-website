---
title: Quick Start
description: Generate and deploy your first OAShield rule set in minutes.
---

This guide takes you from an OpenAPI spec to deployable WAF rules. If you don't have the
CLI yet, see [Installation](/guides/install) first.

## 1. Generate rules

For **ModSecurity v3** (the default engine flavor):

```bash
java -cp oashield-cli.jar org.openapitools.codegen.OpenAPIGenerator \
  generate -g modsecurity3 \
  -i /path/to/openapi.yaml \
  -o /path/to/output/dir
```

Replace `-i` with the path to your OpenAPI spec and `-o` with the directory where the
generated `.conf` rules should be written.

For **Coraza**, select the engine flavor. This also validates JSON request bodies against
a generated JSON Schema:

```bash
java -cp oashield-cli.jar org.openapitools.codegen.OpenAPIGenerator \
  generate -g modsecurity3 \
  -i /path/to/openapi.yaml \
  -o /path/to/output/dir \
  --additional-properties engineFlavor=coraza,schemaRulePath=rules/schema.json
```

> **Windows:** the same commands work; if you add multiple classpath entries, separate
> them with `;` instead of `:`.

No spec handy? Try the
[Petstore sample](https://github.com/cognitivegears/oashield/blob/main/samples/petstore.yaml).
Its pre-generated output is
[checked in](https://github.com/cognitivegears/oashield/tree/main/samples/output/petstore)
so you can compare.

## 2. Look at what you got

The output directory contains one `.conf` file per API tag (e.g. `PetApi.conf`), a
`mainconfig.conf` with engine settings, and, on the Coraza flavor, a `schema.json`.
The rules are plain SecLang; [How It Works](/how) walks through them block by block.

## 3. Deploy the rules

Copy the generated `.conf` files into your ModSecurity or Coraza configuration, alongside
your API or in a sidecar. They load the same way any other SecLang rule file does, for
example with an `Include` from your existing ModSecurity setup.

If your WAF deployment already defines the rule engine mode, body access, and default
action, generate with `includeEngineConfig=false` so OAShield doesn't emit its own. See
[Configuration](/guides/configuration) for that and every other option, including deny
behavior, status codes, and detection-only mode.

## 4. Roll out safely (optional but recommended)

Start in detection-only mode so violations are logged but nothing is blocked:

```bash
... --additional-properties denyAction=pass
```

Watch the audit log for legitimate traffic that falls outside your spec, fix the spec (or
the client), then regenerate with blocking on.
