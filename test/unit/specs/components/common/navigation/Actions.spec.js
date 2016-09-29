import Vue from 'vue';
import Actions from 'src/components/common/navigation/Actions';

describe('Actions.vue', () => {
  const vm = new Vue({
    template: '<div><actions :user="{name: \'Foo Bar\', initials: \'FB\'}"></actions></div>',
    components: { Actions },
  }).$mount();

  it('should render correct button container', () => {
    expect(vm.$el.querySelectorAll('.actions-button').length).to.eq(1);
  });

  it('should render correct user container', () => {
    expect(vm.$el.querySelectorAll('.actions-user').length).to.eq(1);
  });

  it('should render correct notifications container', () => {
    expect(vm.$el.querySelectorAll('.actions-notifications').length).to.eq(1);
  });
});
