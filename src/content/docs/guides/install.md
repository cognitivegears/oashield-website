---
title: Installation
description: How to download or build the OAShield CLI.
---

## Prerequisites

- **Java 8 or later** (Java 11+ recommended)
- **Maven 3.6.0 or later**, only needed if you build from source

## Option A: Download a release (fastest)

Download the latest `oashield-cli.jar` from the
[Releases](https://github.com/cognitivegears/oashield/releases) page. That's it. There's
no installation step; the jar is self-contained.

## Option B: Build from source

```bash
git clone https://github.com/cognitivegears/oashield.git
cd oashield
mvn package -P build-cli-jar
```

This produces `target/oashield-cli.jar`.

## Verify it runs

```bash
java -cp oashield-cli.jar org.openapitools.codegen.OpenAPIGenerator help
```

If you see the OpenAPI Generator help text, you're ready for the
[Quick Start](/guides/start).
