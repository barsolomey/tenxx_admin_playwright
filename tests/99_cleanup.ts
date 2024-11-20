import { test } from '@playwright/test';
import { unlink } from 'fs/promises';

test.afterAll(
  
  async () => {
  try {
    await unlink('./auth.json');
    console.log('Authentication state file cleaned up.');
  }
  catch (error) {
    console.error('Error cleaning up auth file:', error);
  }
});