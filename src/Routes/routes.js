import express from 'express';
import forms from "../Controllers/formController.js";

const routes = express.Router();

routes.get('/forms', forms.findAll);
routes.get('/forms/:id', forms.findForm);
routes.post('/forms/insert', forms.addForm);
routes.put('/forms/:id', forms.updateForm);
routes.delete('/forms/:id', forms.deleteForm);


export { routes as default };
