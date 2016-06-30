var userSchema = mongoose.Schema({
  name: { type: String, required: true }
})

var productSchema = mongoose.Schema({
  product: { type: String, required: true },
  bid: { type: Number, required: true },
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

mongoose.model('User', userSchema)
mongoose.model('Bid', productSchema)
