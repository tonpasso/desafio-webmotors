const connection = require('./connection');

const create = async (marca, modelo, versao, ano, quilometragem, observacao) => {
  try {
    const [
      result,
    ] = await connection.query(
      'INSERT INTO AnuncioWebmotors (marca, modelo, versao, ano, quilometragem, observacao) VALUES (?, ?, ?, ?, ?, ?);',
      [marca, modelo, versao, ano, quilometragem, observacao]
    );
    return { id: result.insertId, marca, modelo, versao, ano, quilometragem, observacao };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const [result] = await connection.query('SELECT * from AnuncioWebmotors');
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);    
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query('SELECT * FROM AnuncioWebmotors WHERE id = ?', [id]);
    if (!result.length) return null

    return result[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);   
  }
};

const update = async (id, marca, modelo, versao, ano, quilometragem, observacao) => {
  try {
    const result = await connection.query('UPDATE AnuncioWebmotors SET marca = ?, modelo = ?, versao = ?, ano = ?, quilometragem = ?, observacao = ? WHERE id = ?', [marca, modelo, versao, ano, quilometragem, observacao, id]);
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    // const result = await getById(id);
    // if (!result) return {}
    await connection.query('DELETE FROM AnuncioWebmotors WHERE id = ?', [id])
    // return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
}