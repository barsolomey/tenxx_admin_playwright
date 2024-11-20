import { expect, type Locator, type Page } from '@playwright/test';

export class ReportsPage {
  
  page: Page;
  reportsPage: Locator;
  dateColumn: Locator;
  firstNotProcessed: Locator;
  filterButton: Locator;
  filterStatusField: Locator;
  filterStatusNotProcessed: Locator;
  filterCloseButton: Locator;
  filerClearButton: Locator;
  firstPage: Locator;
  nextPage: Locator;
  prevPage: Locator;
  secondPage: Locator;
  
  baseURL: string;

  constructor(page: Page) {
    
    
    this.page = page;
    
    // Define selectors
    this.reportsPage = page.getByTestId('navigation1--0_3--trigger');
    this.dateColumn = page.getByRole('columnheader', { name: 'Date' });
    this.firstNotProcessed = page.getByRole('gridcell').getByText('NOT_PROCESSED').first();
    this.filterButton = page.getByRole('button', { name: 'Filter' });
    this.filterStatusField = page.getByTestId('select2--0').getByTestId('Widgets::SelectInputContainer_button');
    this.filterStatusNotProcessed = page.getByTestId('ListBox::ListBoxItem::2').getByText('NOT_PROCESSED');
    this.filterCloseButton = page.getByLabel('Close');
    this.filerClearButton = page.getByTestId('Input::ClearButton_button');
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
  async openReports() {
    await this.reportsPage.click();
  }

  // Sort by description, sorting is currently not working for any of the columns and therefore will stay hidden for now. 
  async sortByDate() {
    await this.dateColumn.isVisible();
    await this.dateColumn.click();
    // ??? await this.gridCell.getByText('AAA').isVisible();
    await this.dateColumn.click();
    // ??? await this.gridCell.getByText('ZZZ').isVisible();
    await this.dateColumn.click();
     }
  
  // Filter by Description, check clip detail
  async filterByStatus() {
    await this.filterButton.isVisible();
    await this.filterButton.click();
    await this.filterStatusField.isVisible();
    await this.filterStatusField.click();
    await this.filterStatusNotProcessed.click();
    await this.filterCloseButton.click();
    await this.firstNotProcessed.isVisible(); // assumes that at least 1 line with this status exists
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

