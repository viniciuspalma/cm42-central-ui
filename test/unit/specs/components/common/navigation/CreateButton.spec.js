import Vue from 'vue';
import CreateButton from 'src/components/common/navigation/CreateButton';

describe('CreateButton.vue', () => {
  const vm = new Vue({
    template: '<div><create-button></create-button></div>',
    components: { CreateButton },
  }).$mount();

  it('should render correct button', () => {
    expect(vm.$el.querySelectorAll('button').length).to.eq(1);
  });

  it('should render correct button text', () => {
    expect(vm.$el.querySelector('button').textContent).to.contain('Create');
  });

  it('should render correct icon', () => {
    expect(vm.$el.querySelector('i').textContent).to.contain('add');
  });
});
