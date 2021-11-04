const AnuncioModel = require('../models/anuncioModel');

const getAllAnuncio = (async (_req, res, next)  => {
  try {
    const result = await AnuncioModel.getAll();

    res.status(200).json(result);    
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado!'});
  }  
});

const getAnuncioById = (async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await AnuncioModel.getById(id);

    if (result === null) {
    res.status(404).send({ message: 'Não encontrado!' });
  }
  res.status(200).json(result);    
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado!'})
  }
});

const createAnuncio = (async (req, res, next) => {
  const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
  try {
    const result = await AnuncioModel.create(marca, modelo, versao, ano, quilometragem, observacao);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send({ message: 'Não foi possíve inserir novo anúncio.'});
  }
});

const excludeAnuncio = (async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await AnuncioModel.exclude(id);

    res.status(200).json(result);    
  } catch (error) {
    res.status(500).send({ message: 'Não foi possível excluir.'});
  }
});

const updateAnuncio = (async (req, res, next) => {
  const { id } = req.params;
  const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
  try {
    const result = await AnuncioModel.update(id, marca, modelo, versao, ano, quilometragem, observacao);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).send({ message: 'Não foi possível atualizar.'});
  }
});


module.exports = {
  getAllAnuncio,
  getAnuncioById,
  createAnuncio,
  excludeAnuncio,
  updateAnuncio,
}