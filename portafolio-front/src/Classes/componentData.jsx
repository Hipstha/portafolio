class ComponentData {
  summaryCardsData = [];
  polarChartData = [];
  progressBarsData = [];
  jobData = [];

  setSummaryCardData(array) {
    this.summaryCardsData = array;
  }

  getSummaryCardData() {
    return this.summaryCardsData;
  }

  setProgressBarsData(array) {
    this.progressBarsData = array;
  }

  getProgressBarsData() {
    return this.progressBarsData;
  }

  setPolarChartData(dataset, labels) {
    this.polarChartData = [dataset, labels];
  }

  getPolarChartData() {
    return this.polarChartData;
  }

  setJobData(array) {
    this.jobData = array;
  }

  getJobData() {
    return this.jobData;
  }

}

export default ComponentData;