import { badRequest } from './../helpers/http-helper'
import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest, HttpResponse } from './../protocols/http'
import { Controller } from '../protocols/controller'
export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
