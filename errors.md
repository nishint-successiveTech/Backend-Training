
# errors.md  

## Error Codes and Descriptions  

This document outlines a detailed list of common error codes used across systems, APIs, and applications. It provides explanations of each code, its meaning, and guidance for troubleshooting.

---

## 1xx - Informational Responses  

| Code | Name                  | Description                                          |
|------|------------------------|------------------------------------------------------|
| 100  | Continue               | The initial part of a request has been received.      |
| 101  | Switching Protocols     | Server agrees to switch protocols as requested.       |
| 102  | Processing              | Server has received and is processing the request.    |

---

## 2xx - Success  

| Code | Name                  | Description                                                |
|------|------------------------|--------------------------------------------------------------|
| 200  | OK                     | Request succeeded.                                            |
| 201  | Created                | Resource successfully created.                                |
| 202  | Accepted               | Request accepted but not yet processed.                       |
| 204  | No Content             | Successful request, no content returned.                      |

---

## 3xx - Redirection  

| Code | Name                  | Description                                                    |
|------|------------------------|------------------------------------------------------------------|
| 301  | Moved Permanently      | Resource has been permanently moved to a new URI.                |
| 302  | Found                  | Resource temporarily located elsewhere.                         |
| 304  | Not Modified           | Resource has not changed since the last request.                |
| 307  | Temporary Redirect     | Temporary redirect, method must not change.                     |

---

## 4xx - Client Errors  

| Code | Name                    | Description                                                               |
|------|--------------------------|---------------------------------------------------------------------------|
| 400  | Bad Request               | Malformed syntax, invalid request.                                        |
| 401  | Unauthorized              | Authentication is required or failed.                                     |
| 403  | Forbidden                 | Server understands but refuses to authorize.                              |
| 404  | Not Found                 | Requested resource could not be found.                                    |
| 405  | Method Not Allowed        | Request method is not supported for the resource.                         |
| 408  | Request Timeout           | Server timed out waiting for the request.                                 |
| 409  | Conflict                  | Conflict in the request, typically due to resource state.                 |
| 410  | Gone                      | Resource is permanently unavailable.                                      |
| 429  | Too Many Requests         | Rate limit exceeded.                                                      |

---

## 5xx - Server Errors  

| Code | Name                    | Description                                                               |
|------|--------------------------|---------------------------------------------------------------------------|
| 500  | Internal Server Error     | Generic server error, unexpected condition.                               |
| 501  | Not Implemented           | Server does not support the functionality.                                |
| 502  | Bad Gateway               | Invalid response from upstream server.                                    |
| 503  | Service Unavailable       | Server temporarily unavailable or overloaded.                             |
| 504  | Gateway Timeout           | Server acting as gateway timed out waiting for upstream.                  |
| 505  | HTTP Version Not Supported| HTTP version not supported by the server.                                 |

---

## Application-Specific Error Codes (Example)  

| Code | Name                         | Description                                                                 |
|------|-------------------------------|-----------------------------------------------------------------------------|
| 600  | Invalid API Key               | Provided API key is invalid or missing.                                      |
| 601  | Expired Token                 | Authentication token has expired.                                            |
| 602  | Resource Limit Exceeded       | User quota exceeded for resource usage.                                      |
| 603  | Invalid Input Data            | Submitted data did not meet validation rules.                                |
| 604  | Dependency Service Unavailable| An external service dependency is unavailable or unresponsive.               |
| 605  | Operation Not Supported       | Requested operation is unsupported in this context.                         |

---

## Error Handling Best Practices  

1. **Logging:** Always log error codes with detailed context for analysis.
2. **User Messages:** Provide clear and actionable messages to users, avoid exposing internal details.
3. **Retries:** Implement retry logic for transient errors like 502, 503, and 504.
4. **Validation:** Prevent 4xx errors through proper input validation and client-side checks.
5. **Monitoring:** Track error rates to identify trends and potential systemic issues.

---