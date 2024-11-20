import { expect, type Locator, type Page } from '@playwright/test';

export class ClipsPage {
  
  page: Page;
  clipsPage: Locator;
  descColumn: Locator;
  gridCell: Locator;
  filterButton: Locator;
  filterDescField: Locator;
  filterCloseButton: Locator;
  filerClearButton: Locator;
  detailTab: Locator;
  previewContainer: Locator;
  clipContainer: Locator;
  firstPage: Locator;
  nextPage: Locator;
  prevPage: Locator;
  secondPage: Locator;
  
  baseURL: string;

  constructor(page: Page) {
    
    
    this.page = page;
    
    // Define selectors
    this.clipsPage = page.getByTestId('navigation1--0_1--trigger');
    this.descColumn = page.getByRole('columnheader', { name: 'Description' });
    this.gridCell = page.getByRole('gridcell');
    this.filterButton = page.getByRole('button', { name: 'Filter' });
    this.filterDescField = page.getByTestId('textInput10--0').getByPlaceholder('Enter value');
    this.filterCloseButton = page.getByLabel('Close');
    this.filerClearButton = page.getByTestId('Input::ClearButton_button');
    this.detailTab = page.getByText('Detail');
    this.previewContainer = page.locator('._currentChildren_cklkp_77 > div > div > div:nth-child(2) > div > div > div > div > div > span > ._main_cklkp_6 > ._container_cklkp_28 > ._body_cklkp_153 > ._currentChildren_cklkp_77 > ._container_hee9p_1 > ._droppable_y8qu3_1 > div > ._margin_zygox_1').first();
    this.clipContainer = page.locator('._currentChildren_cklkp_77 > div > div > div:nth-child(2) > div > div > div > div > div > span > ._main_cklkp_6 > ._container_cklkp_28 > ._body_cklkp_153 > ._currentChildren_cklkp_77 > ._container_hee9p_1 > ._droppable_y8qu3_1 > div:nth-child(2) > ._margin_zygox_1');
    this.firstPage = page.getByRole('gridcell', { name: 'Showing 1-10 of' });
    this.secondPage = page.getByRole('gridcell', { name: 'Showing 11-20 of' });
    this.nextPage = page.getByLabel('Next page');
    this.prevPage = page.getByLabel('Previous page');

    this.baseURL = 'https://tenthousandapp.retool.com/apps/52d357bc-346e-11ef-a9d9-c743b529333d/Ten%20Thousand';
  }

  // Method to navigate to the page
  async navigate() {
    await this.page.goto(this.baseURL);
    
  }

  // Open Clips page
  async openClips() {
    await this.clipsPage.click();
  }

  // Sort by description, sorting is currently not working for any of the columns and therefore will stay hidden for now. 
  //async sortByDesc() {
  //  await this.descColumn.isVisible();
  //  await this.descColumn.click();
  //  await this.gridCell.getByText('AAA').isVisible();
  //  await this.descColumn.click();
  //  await this.gridCell.getByText('ZZZ').isVisible();
  //  await this.descColumn.click();
    // }
  
  // Filter by Description, check clip detail
  async filterByDesc() {
    await this.filterButton.isVisible();
    await this.filterButton.click();
    await this.filterDescField.click();
    await this.filterDescField.fill('NO COMP SPOTLIGHT ME');
    await this.filterCloseButton.click();
    await this.gridCell.getByText('NO COMP SPOTLIGHT ME').isVisible();
    }
  
  //Open clip detail and verify that preview and video is displayed 
  async clipDetail(){
    await this.gridCell.getByText('NO COMP SPOTLIGHT ME').click();
    await this.detailTab.isVisible();
    await this.previewContainer.isVisible();
    await this.clipContainer.isVisible();
  }

  // Delete filtering parameter. Can be reused if only one parameter is chosen.
  async cancelFiltering(){
    await this.filterButton.click();
    await this.filerClearButton.click();
    await this.filterCloseButton.click();
  }
  
   // Going back and forth between pages works
  //NOTE verifying displayed results number probably is not sufficient, how do I assert changes of tables content?
 
  async tablePagination(){
    await this.firstPage.isVisible();
    await this.nextPage.click();
    await this.secondPage.isVisible();
    await this.prevPage.click();
    await this.firstPage.isVisible();
  }


}

