import { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';

const ProblemCaseExplorerTable = ({ problemData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of rows per page

  // Calculate pagination variables
  const totalPages = Math.ceil(problemData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = problemData.slice(startIndex, endIndex);

  return (
    <div>
      {problemData && problemData.length > 0 && (
        <div>
          <TableContainer>
            <Table variant="striped">
              <Thead>
                <Tr>
                  {Object.keys(problemData[0]).map((header, index) => (
                    <Th key={index}>{header}</Th>
                  ))}
                  <Th>Link</Th>
                </Tr>
              </Thead>
              <Tbody>
                {paginatedData.map((element, index) => (
                  <Tr key={index}>
                    {Object.values(element).map((value, i) => (
                      <Td key={i}>{value}</Td>
                    ))}
                    <Td>
                      {/* Example Link for each row */}
                      <a href={`/details/${element.id}`}>Details</a>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          {/* Pagination Controls */}
          <Flex justifyContent="space-between" alignItems="center" mt="2rem">
            <Button
              isDisabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Box>
              Page {currentPage} of {totalPages}
            </Box>
            <Button
              isDisabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </Flex>
        </div>
      )}
    </div>
  );
};

export default ProblemCaseExplorerTable;
