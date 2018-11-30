import { mount } from '@vue/test-utils';
import headed from '../../src/components/headerSection';

const wrapper = mount(headed);

describe('headed', () => {
    it('Displays header section', () => {

        expect(wrapper.vm.$data.query).toBe(" ");

        const input = wrapper.find('input');
        input.element.value = "Venom";
        input.trigger('input');

        expect(wrapper.vm.$data.query).toBe("Venom");
    })
});