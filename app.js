const api = require('./api');

async function main() {
    console.log("--- Iniciando Simulação da API ---\n");

    try {
        // 1. Listar usuários iniciais
        console.log("1. Buscando usuários...");
        const users = await api.getUsers();
        console.log("Usuários encontrados:", users);

        // 2. Criar um novo usuário
        console.log("\n2. Criando novo usuário...");
        const newUser = await api.createUser({ name: "Diana", email: "diana@example.com" });
        console.log("Usuário criado:", newUser);

        // 3. Confirmar a lista atualizada
        console.log("\n3. Buscando usuários atualizados...");
        const updatedUsers = await api.getUsers();
        console.log("Lista atualizada:", updatedUsers);

        // 4. Deletar um usuário existente
        console.log("\n4. Deletando usuário ID 2 (Bob)...");
        const deleteResult = await api.deleteUser(2);
        console.log(deleteResult.message);

        // 5. Testar erro ao deletar usuário inexistente
        console.log("\n5. Tentando deletar usuário inexistente (ID 99)...");
        await api.deleteUser(99);

    } catch (error) {
        console.error("Erro capturado:", error.message);
    }

    console.log("\n--- Fim da Simulação ---");
}

main();
