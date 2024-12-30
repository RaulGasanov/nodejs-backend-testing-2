import exp from 'constants';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      // реализуйте тест-кейс
      const foundPosts = postsService.findMany();
      expect(foundPosts).toEqual(expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          text: expect.any(String),
        })
      ]));
      expect(foundPosts.length).toEqual(posts.length);
    });

    it('should return correct posts for skip and limit options', () => {
      // реализуйте тест-кейс
      const skip = 0;
      const limit = 2;
      expect(postsService.findMany({skip, limit}).length).toEqual(limit);
      expect(postsService.findMany({skip, limit})).toEqual(posts.slice(skip, skip+limit).map(post => ({ id: expect.any(String), ...post})));
    });

    it ('should return correct posts from skip if limit is not provided', () => {
      const skip = 2;
      expect(postsService.findMany({skip}).length).toEqual(posts.length - skip);
      expect(postsService.findMany({skip})).toEqual(posts.slice(skip).map(post => ({ id: expect.any(String), ...post})));

    });
    // реализуйте недостающие тест-кейсы
  });
});
