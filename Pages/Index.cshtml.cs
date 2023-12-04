using CashDrawer.Models.Entities;
using CashDrawer.Models.Enums;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data;

namespace CashDrawer.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public List<TableRow> tableRows { get; set; }

        public void OnGet()
        {
            tableRows = new List<TableRow>();

            foreach (Mesi mese in Enum.GetValues(typeof(Mesi)))
            {

                TableRow riga = new TableRow
                {
                    Mese = mese,
                    Stipendio = 0,
                    EntrateExtra = 0,
                    Totale = 0,
                    Cassa = 0,
                    Emergenze = 0,
                    Programmato = 0,
                    Varie = 0,
                    ContoComune = 0,
                    ContoWeekend = 0,
                    SpeseMensili = 0,
                    SpeseAnnuali = 0,
                    UsciteExtra = 0,
                    Rimanenza = 0
                };

                tableRows.Add(riga);

            }
        }
    }
}
