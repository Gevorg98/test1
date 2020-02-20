const Joi = require('joi'); 
export const movieCreateSchema = Joi.object().keys({ 
    id: Joi.string().required(),
    language: Joi.array().items(Joi.object.keys({ 
      description: Joi.string(), 
      name: Joi.string().required(), 
      translations: Joi.string().required()
    })) 
  });

  export const movieGetSchema = Joi.object().keys({ 
    id: Joi.string().required(),
    language: Joi.array().items(Joi.object.keys({ 
      description: Joi.string(), 
      name: Joi.string().required(),
      translations: Joi.string().required()
    })) 
  });

  export const movieUpdateSchema = Joi.object().keys({ 
    id: Joi.string().required(),
    language: Joi.array().items(Joi.object.keys({ 
      description: Joi.string(), 
      name: Joi.string().required(), 
      translations: Joi.string().required()
    })) 
  });

  export const movieDeleteSchema = Joi.object().keys({ 
    id: Joi.string().required()
  });

 