import Vue from 'vue';
import Search from 'src/components/common/navigation/Search';

describe('Search.vue', () => {
  const vm = new Vue({
    template: '<div><search></search></div>',
    components: {
      Search,
    },
  }).$mount();

  it('should render correct input', () => {
    expect(vm.$el.querySelectorAll('.search-input').length).to.eq(1);
  });

  it('should render correct icon text', () => {
    expect(vm.$el.querySelector('i').textContent).to.contain('search');
  });
});
