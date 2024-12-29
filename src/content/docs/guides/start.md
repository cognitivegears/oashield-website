---
title: Getting Started
description: Getting started with running OAShield
---

## Getting started with OAShield

If you have not already, first install OAShield. See [Installation](/guides/install) for instructions.

## Running OAShield

Use the following command to generate the ModSecurity configuration:

```cmd
     java -cp target/oashield-cli.jar org.openapitools.codegen.OpenAPIGenerator generate -g modsecurity3 -i /path/to/openapi.yaml -o /path/to/output/dir
```

 Replace `/path/to/openapi.yaml`, and `/path/to/output/dir` with the appropriate paths.

For Windows users, use `;` instead of `:` in the classpath:

```cmd
     java -cp target/oashield-cli.jar org.openapitools.codegen.OpenAPIGenerator generate -g modsecurity3 -i /path/to/openapi.yaml -o /path/to/output/dir
```

### Deploy the generated rules:

Copy the generated ModSecurity configuration files from the output path (i.e. `/path/to/output/dir`) to your ModSecurity setup.
