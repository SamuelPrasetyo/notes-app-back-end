class UploadsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postUploadImageHandler = this.postUploadImageHandler.bind(this);
  }

  async postUploadImageHandler(request, h) {
    const { data } = request.payload;
    this._validator.validateImageHeaders(data.hapi.headers);

    // const filename = await this._service.writeFile(data, data.hapi); // Local file system
    const fileLocation = await this._service.writeFile(data, data.hapi); // S3

    const response = h.response({
      status: 'success',
      data: {
        // Local file system
        // fileLocation: `http://${process.env.HOST}:${process.env.PORT}/upload/images/${filename}`,
        fileLocation, // S3
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = UploadsHandler;
