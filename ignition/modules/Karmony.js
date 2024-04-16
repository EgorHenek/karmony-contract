const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("KarmonyModule", (m) => {
  const token = m.contract("Karmony");

  return { token };
});

module.exports = TokenModule;
