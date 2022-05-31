describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("check register a new skill", async () => {
    const inputNewSkill = await element(by.id("input-new"));
    const buttonAdd = await element(by.id("button-add"));
    const flatListSkills = await element(by.id("flat-list-skills"));

    await inputNewSkill.tap(); //clicar no input

    await inputNewSkill.typeText("React Native"); //escrever
    await flatListSkills.tap();
    await buttonAdd.tap();

    await inputNewSkill.typeText("React.JS");
    await flatListSkills.tap();
    await buttonAdd.tap();

    await inputNewSkill.typeText("Javascript");
    await flatListSkills.tap();
    await buttonAdd.tap();

    await inputNewSkill.typeText("Javascript");
    await flatListSkills.tap();
    await buttonAdd.tap();

    await inputNewSkill.typeText("Teste e2e");
    await flatListSkills.tap();
    await buttonAdd.tap(); //apertar no botão

    await flatListSkills.swipe("up", "fast", 0.9);

    expect(element(by.id("flat-list-skills"))).toBeVisible();
  });
});
