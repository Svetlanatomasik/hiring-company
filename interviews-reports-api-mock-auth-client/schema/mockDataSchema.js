const schema = {
  "type": "object",
  "properties": {
    "companies": {
      "type": "array",
      "minItems": 5,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "company.companyName"
          },
          "email": {
            "type": "string",
            "format": "email",
            "unique": true,
            "faker": "internet.email"
          }
        },
        "required": ["id", "name", "email"]
      }
    },
    "candidates": {
      "type": "array",
      "minItems": 10,
      "maxItems": 20,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "avatar": {
            "type": "string",
            "faker": "image.avatar"
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "birthday": {
            "type": "string",
            "faker": "date.past"
          },
          "email": {
            "type": "string",
            "format": "email",
            "unique": true,
            "faker": "internet.email"
          },
          "education": {
            "type": "string",
            "faker": "name.jobType"
          }
        },
        "required": ["id", "name", "birthday", "email", "education"]
      }
    },
    "reports": {
      "type": "array",
      "minItems": 20,
      "maxItems": 30,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "candidateId": {
            "type": "number"
          },
          "companyId": {
            "type": "number"
          },
          "candidateName": {
            "type": "string",
            "faker": "name.findName"
          },
          "companyName": {
            "type": "string",
            "faker": "company.companyName"
          },
          "interviewDate": {
            "type": "string",
            "faker": "date.recent"
          },
          "phase": {
            "type": "string",
            "faker": "lorem.word"
          },
          "status": {
            "type": "string",
            "faker": "lorem.word"
          },
          "note": {
            "type": "string",
            "faker": "lorem.paragraph"
          }
        },
        "required": [
          "id",
          "candidateId",
          "candidateName",
          "companyId",
          "companyName",
          "interviewDate",
          "phase",
          "status",
          "note"
        ]
      }
    }
  },
  "required": ["companies", "candidates", "reports"]
};

module.exports = schema;
