const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

// Tempo de atraso simulado em milissegundos
const DELAY = 1000;

/**
 * Simula a busca de todos os usuários.
 * @returns {Promise<Array>} Lista de usuários.
 */
function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Retorna uma cópia do array para evitar mutação direta externa
            resolve([...users]);
        }, DELAY);
    });
}

/**
 * Simula a criação de um novo usuário.
 * @param {Object} user Objeto contendo name e email.
 * @returns {Promise<Object>} O usuário criado com ID gerado.
 */
function createUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!user.name || !user.email) {
                reject(new Error("Nome e email são obrigatórios."));
            } else {
                const newUser = { id: users.length + 1, ...user };
                users.push(newUser);
                resolve(newUser);
            }
        }, DELAY);
    });
}

/**
 * Simula a deleção de um usuário pelo ID.
 * @param {number} id ID do usuário a ser deletado.
 * @returns {Promise<Object>} Mensagem de sucesso ou erro.
 */
function deleteUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = users.findIndex(u => u.id === id);
            if (index !== -1) {
                users.splice(index, 1);
                resolve({ message: `Usuário com ID ${id} deletado com sucesso.` });
            } else {
                reject(new Error(`Usuário com ID ${id} não encontrado.`));
            }
        }, DELAY);
    });
}

module.exports = { getUsers, createUser, deleteUser };
