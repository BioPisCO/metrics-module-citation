# Metric Citations

This Metric defines the searching of specific Keyword into a publication stored in Pubmed Central repository.

## Specification

1. **Resource**: NCBI API (E-utilities)
2. **Source**:  Pubmed Central (PCM)
3. **Parameters**:
  1. **Query**: keyword separated by commas (e.g. uniprot, swissuniprot,swiss uniprot = [uniprot OR swissuniprot OR swiss uniprot]).
  2. **Scope**: includes all words and numbers in the title, abstract and article body, as well as in table and figure captions and in the article reference section [Text Word]. 
  3. **Output**: Number of records (publications) that containing the query 
4. **Library description**: 
  1. **citations.js**: return the xml content from NCBI API. In this content there is the number of publications that include the query:
    - **Citation.get(endpoint, key_word, callback)**: GET any API endpoints.
    - **endpoint**: NCBI endpoints (i.e. use 'esearch' for esearch.fcgi).
    - **key_word**: word or words that is citied in specific publications.
    - **callback**: function (err, data),  data is the parsed data received from NCBI.
  2. **ncbiconf.js**: setup path (endpoints) and parameters (query).
  3. **ncbirequest.js**:  manage the request (GET, POST, PUT) and response (encoding, data, end, close) with the NCBI API endpoint.

## Example
1. **Input**: Uniprot
2. **Query**: [NCBI API](http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pmc&term=uniprot\[text word\]&version=2.0)
3. **Output**: 13067 records (this result will change depend on date of execution).

## Git

```git clone https://github.com/BioPisCO/metrics-module-citation.git```

## Requirements

  1. Nodejs
  2. npm

## Install library dependencies
  ```nmp install```
