import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import styles from "./JewelryMain.module.css";

const Data = {
  themeOptions: {
    light: "light",
    dark: "dark",
    custom: "custom",
  },
};

const JewelryMain = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [themeMode, setThemeMode] = useState(Data.themeOptions.light);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [dialogType, setDialogType] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [menuVendor, setMenuVendor] = useState(null);
  const navigate = useNavigate();

  const fetchVendors = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/jewelry");
      console.log("API Response:", response.data); // Debug log
      const vendors = Array.isArray(response.data)
        ? response.data
        : Array.isArray(response.data.data)
        ? response.data.data
        : [];
      console.log("Processed Vendors:", vendors); // Debug log
      setVendors(vendors);
      setLoading(false);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      console.error("API Error:", errorMessage);
      setError(`Failed to fetch Jewelry vendors: ${errorMessage}`);
      setVendors([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const handleModeChange = (e) => {
    const selectedMode = e.target.value;
    if (
      selectedMode === Data.themeOptions.light ||
      selectedMode === Data.themeOptions.dark
    ) {
      setThemeMode(selectedMode);
      document.body.setAttribute("data-bg", "");
    } else {
      setThemeMode(Data.themeOptions.light);
      document.body.setAttribute("data-bg", selectedMode);
    }
  };

  const handleDialogOpen = (type, vendor) => {
    if (type === "edit") {
      navigate(`/edit-jewelry/${vendor._id}`, { state: { profileData: vendor } });
    } else if (type === "view") {
      navigate(`/jewelry-detail/${vendor._id}`);
    } else if (type === "delete") {
      setDialogType(type);
      setSelectedVendor(vendor);
      setIsDialogOpen(true);
      setMenuAnchorEl(null);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedVendor(null);
    setDialogType("");
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/jewelry/${selectedVendor._id}`);
      setVendors(vendors.filter((v) => v._id !== selectedVendor._id));
      handleDialogClose();
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      alert(`Failed to delete Jewelry vendor: ${errorMessage}`);
    }
  };

  const handleMenuOpen = (event, selected) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuVendor(selected);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setMenuVendor(null);
  };

  const columns = useMemo(
    () => [
      { accessorKey: "title", header: "Title" },
      { accessorKey: "name", header: "Vendor Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phone", header: "Phone" },
      { accessorKey: "address", header: "Address" },
      { accessorKey: "ratings", header: "Ratings" },
      {
        accessorKey: "jewelryimgUrl",
        header: "Profile Picture",
        Cell: ({ cell }) => {
          const value = cell.getValue();
          return value && Array.isArray(value) && value.length > 0 ? (
            <img
              src={value[0]}
              alt="Jewelry Vendor"
              className={styles.image}
              onError={(e) => (e.target.src = "/images/placeholder.png")}
            />
          ) : (
            "No Image"
          );
        },
      },
      {
        accessorKey: "actions",
        header: "Actions",
        Cell: ({ row }) => (
          <>
            <IconButton
              onClick={(e) => handleMenuOpen(e, row.original)}
              className={styles.actionButton}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl && menuVendor === row.original)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleDialogOpen("view", row.original)}>
                View
              </MenuItem>
              <MenuItem onClick={() => handleDialogOpen("edit", row.original)}>
                Edit
              </MenuItem>
              <MenuItem onClick={() => handleDialogOpen("delete", row.original)}>
                Delete
              </MenuItem>
            </Menu>
          </>
        ),
      },
    ],
    [menuAnchorEl, menuVendor]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  if (loading) return <p>Loading Jewelry vendors...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Jewelry Vendors</h2>
        <button className={styles.add}>
          <Link to="/add-jewelry">Add Jewelry Vendor</Link>
        </button>
      </div>
      <div className={styles.table_container}>
        <ThemeProvider theme={theme}>
          <MaterialReactTable columns={columns} data={vendors} />
        </ThemeProvider>
      </div>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        {dialogType === "delete" && (
          <>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogContent>
              <p>Are you sure you want to delete this Jewelry vendor?</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose}>Cancel</Button>
              <Button onClick={handleDeleteConfirm} color="error">
                Delete
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default JewelryMain;
