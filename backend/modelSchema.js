const mongoose = require('mongoose');

const uri = 'yourMongoDBConnectionString';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dataSchema = new mongoose.Schema({
  id: Number,
  Quantity: Number,
  Amount: Number,
  PostingYear: Number,
  PostingMonth: Number,
  ActionType: String,
  ActionNumber: String,
  ActionName: String,
  Status: String,
  UserNameEditedBy: String,
  UserNameEditedWhen: String
});

const Data = mongoose.model('Data', dataSchema);


