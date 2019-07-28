import { shallowMount } from "@vue/test-utils";
import MainContainerContent from "@/components/MainContainerContent.vue";

describe("MainContainerContent.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(MainContainerContent, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
